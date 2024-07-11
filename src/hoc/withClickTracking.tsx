import { ComponentType } from "react";

interface WithClickTrackingProps {
    trackingInfo: string;
    label:string;
}
  

const withClickTracking = <P extends WithClickTrackingProps>(WrappedComponent: ComponentType<P>) => {

    return (props:P) => {

      const handleClick = () => {
        console.log('Click tracked:', props.trackingInfo);
      };
  
      return (
        <div onClick={handleClick}>
          <WrappedComponent {...props} />
        </div>
      );
    };
  };


export default withClickTracking;