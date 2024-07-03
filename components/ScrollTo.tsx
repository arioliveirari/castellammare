
export const ScrollTo = (target: string, type: ScrollBehavior = "smooth") => {
    const main = document.getElementById(target)?.scrollIntoView({ behavior: type })
    
    // window.scrollTo({
    //   top: offsetPosition,
    //   behavior: type
    // });
  }