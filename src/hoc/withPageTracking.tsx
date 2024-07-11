import { ComponentType, useEffect } from 'react';

interface WithPageTrackingProps {
  pageName: string;
}


const withPageTracking = <P extends object>(WrappedComponent: ComponentType<P>) => {

  return (props: P & WithPageTrackingProps) => {

    useEffect(() => {
      console.log('Page tracked:', props.pageName);

    }, [props.pageName]);

    return <WrappedComponent {...props} />;
  };
};
export default withPageTracking;
