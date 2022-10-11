import React from "react";

const Volver = (props: any) => {
  React.useEffect(() => {
    window.history.go(-2)
  }, []);

  return (
    <></>
  )
}
export default Volver