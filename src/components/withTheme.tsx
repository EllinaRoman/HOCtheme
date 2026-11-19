export default function withTheme<P extends object>(
  Component: React.ComponentType<P>,
): (props: P) => React.ReactElement | null {
  const WrappedComponent = (props: P): React.ReactElement | null => {
    return <Component {...props} />;
  };

  WrappedComponent.displayName = `withTheme(${Component.displayName || Component.name || "Component"})`;

  return WrappedComponent;
}
