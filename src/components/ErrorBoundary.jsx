import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error("Render crash:", error, info.componentStack);
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div className="min-h-screen tabletop text-slate-100 flex flex-col items-center justify-center px-4 py-10 text-center">
        <div className="wood-panel rounded-xl p-6 max-w-md space-y-3">
          <h1 className="text-2xl font-bold text-amber-50">Something went wrong</h1>
          <p className="text-amber-100/70 text-sm">
            This page hit an error and couldn't render. Reloading usually fixes it.
          </p>
          <pre className="text-left text-xs text-red-300/80 bg-black/30 rounded-lg p-3 overflow-auto max-h-40">
            {String(this.state.error?.message || this.state.error)}
          </pre>
          <button
            className="rounded-lg bg-indigo-600 hover:bg-indigo-500 py-2 px-4 font-semibold transition"
            onClick={() => (window.location.href = "#/")}
          >
            Back to home
          </button>
        </div>
      </div>
    );
  }
}
