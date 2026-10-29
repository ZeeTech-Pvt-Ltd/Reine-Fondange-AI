// Post-migration smoke test: routes, redirects, 404, interactions, hydration.
import { chromium } from 'file:///C:/Users/samee/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';

const BASE = process.env.BASE_URL || 'http://localhost:4723';
const errors = [];
const report = { routes: {}, interactions: {}, noJs: {}, consoleErrors: [] };

const browser = await chromium.launch({
  executablePath:
    'C:/Users/samee/AppData/Local/ms-playwright/chromium-1217/chrome-win64/chrome.exe',
});
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await ctx.newPage();
page.on('console', (m) => m.type() === 'error' && errors.push(m.text() + ' @ ' + (m.location()?.url || '')));
page.on('pageerror', (e) => errors.push(String(e)));
page.on('response', (r) => {
  if (r.status() >= 400 && !r.url().includes('google-analytics')) errors.push(`HTTP ${r.status()} ${r.url()}`);
});

// --- 1. All routes: 200 + title/h1 ---
const routes = [
  ['/', 'Reine Fondange AI'],
  ['/about-us', 'About Us'],
  ['/how-it-works', 'How It Works'],
  ['/why-invest', 'Why Invest'],
  ['/faq', 'FAQ'],
  ['/contact-us', 'Contact Us'],
  ['/sign-up', 'Sign Up'],
  ['/sign-in', 'Sign In'],
  ['/thank-you', 'Thank You'],
  ['/privacy-policy', 'Privacy Policy'],
  ['/terms-of-use', 'Terms of Use'],
  ['/risk-disclosure', 'Risk Disclosure'],
];
for (const [path, titleFrag] of routes) {
  const res = await page.goto(BASE + path, { waitUntil: 'domcontentloaded' });
  const title = await page.title();
  const h1 = await page.locator('h1').first().textContent().catch(() => '');
  report.routes[path] = {
    status: res.status(),
    titleOk: title.includes(titleFrag) || title.includes('Reine Fondange AI'),
    title,
    h1: (h1 || '').trim().slice(0, 60),
  };
}

// --- 2. Redirects (308) + 404 ---
for (const [from, to] of [['/product', '/how-it-works'], ['/why', '/why-invest']]) {
  const res = await page.goto(BASE + from);
  report.routes[from] = { status: res.status(), finalUrl: page.url(), to };
}
const nf = await page.goto(BASE + '/definitely-not-a-page');
report.notFound = {
  status: nf.status(),
  h1: (await page.locator('h1').first().textContent().catch(() => '')).trim(),
  hasButton: (await page.locator('a.btn').count()) > 0,
};

// --- 3. Homepage interactions ---
await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });

// Burger menu (mobile-only element - use a phone viewport)
await page.setViewportSize({ width: 390, height: 844 });
await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(300);
const burger = page.locator('.header__burger');
await burger.click();
report.interactions.burgerOpens = await page.locator('.mobile-menu.is-open').count() === 1;
await burger.click();
report.interactions.burgerCloses = await page.locator('.mobile-menu.is-open').count() === 0;
await page.setViewportSize({ width: 1280, height: 900 });
await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });

// FAQ accordion (single-open: clicking item 2 moves the open state)
const faqBtn = page.locator('.faq__q').nth(1);
await faqBtn.click();
report.interactions.faqSecondOpens =
  (await page.locator('.faq__item').nth(1).getAttribute('class')).includes('is-open');

// Testimonial slider next arrow
const slider = page.locator('.quote-track');
await slider.scrollIntoViewIfNeeded();
await page.waitForTimeout(400);
const scrollBefore = await slider.evaluate((el) => Math.round(el.scrollLeft));
await page.getByRole('button', { name: 'Next testimonials' }).click();
await page.waitForTimeout(1000);
const scrollAfter = await slider.evaluate((el) => Math.round(el.scrollLeft));
report.interactions.sliderAdvances = scrollAfter > scrollBefore;
report.interactions.sliderActiveDot2 = await page.locator('.quote-dot--active').count() === 1;

// Ticker price changes (random walk every 2.5s)
const tickerPrice = page.locator('.ticker__price, [class*="ticker"] span').first();
const price1 = await tickerPrice.textContent().catch(() => '');
await page.waitForTimeout(3200);
const price2 = await tickerPrice.textContent().catch(() => '');
report.interactions.tickerAnimates = price1 !== '' && price1 !== price2;

// --- 4. Registration form (stubbed endpoint) ---
await page.goto(BASE + '/sign-up', { waitUntil: 'domcontentloaded' });
await page.route('https://apexai-experts.com/homeMailAction.php', (route) =>
  route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' })
);
await page.fill('#signup-firstName', 'Olivia');
await page.fill('#signup-lastName', 'Tester');
await page.fill('#signup-email', 'olivia@example.com.au');
await page.fill('#signup-phone', '412345678');
await page.click('button[type="submit"]');
await page.waitForSelector('.form__success, .form__error', { timeout: 8000 });
const successShown = (await page.locator('.form__success').count()) > 0;
await page.waitForURL('**/thank-you', { timeout: 4000 }).catch(() => {});
report.interactions.formSuccess = successShown;
report.interactions.formRedirect = page.url().endsWith('/thank-you');

// --- 5. No-JS reveal fallback ---
const noJsCtx = await browser.newContext({ javaScriptEnabled: false });
const noJsPage = await noJsCtx.newPage();
await noJsPage.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
const reveals = noJsPage.locator('.reveal');
report.noJs.revealCount = await reveals.count();
report.noJs.firstVisible = reveals.count() === 0 || (await reveals.first().evaluate((el) => getComputedStyle(el).opacity)) === '1';
await noJsCtx.close();

// --- Screenshots for the shots/ baseline comparison ---
await page.goto(BASE + '/', { waitUntil: 'networkidle' }).catch(() => {});
await page.waitForTimeout(800);
await page.screenshot({ path: 'shots/next-home-top.png', clip: { x: 0, y: 0, width: 1280, height: 900 } });
await page.locator('.footer').scrollIntoViewIfNeeded();
await page.waitForTimeout(800);
await page.screenshot({ path: 'shots/next-home-footer.png' });

report.consoleErrors = errors;
console.log(JSON.stringify(report, null, 2));
await browser.close();
