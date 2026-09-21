import { Component, Fragment } from 'react';

// Mounts below-the-fold sections on deterministic timers (NOT requestIdleCallback -
// rIC gets starved for many seconds under Lighthouse/PSI throttling, which wrecked
// Speed Index). Short staggered delays keep initial layout off the critical path
// while guaranteeing everything is in the DOM within ~1s.
export default class BelowTheFold extends Component {
  state = { ready: false };

  componentDidMount() {
    const { delay = 0 } = this.props;
    this._timer = setTimeout(() => this.setState({ ready: true }), delay);
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  render() {
    return this.state.ready ? <Fragment>{this.props.children}</Fragment> : null;
  }
}
