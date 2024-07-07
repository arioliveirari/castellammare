
export const ScrollTo = (target: string, type: ScrollBehavior = "smooth") => {
  const yOffset = 60
  const element = document.getElementById(target)?.scrollIntoView({
    behavior: "smooth"
  })
  // const scrollExtra = document.getElementById(target)?.scrollBy(0, -60)
  //@ts-ignore
  // const y = element?.getClientRects()[0].y - 60
  // window.scrollTo({ top: y, behavior: 'smooth',  });
  // console.log(y, "ARIEL")
  // window.scrollTo({ top: -60, behavior: 'smooth' });
  //   console.log("entro ariel")

}

//   const id = 'profilePhoto';
// const yOffset = -10; 
// const element = document.getElementById(id);
// const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

// window.scrollTo({top: y, behavior: 'smooth'});

export const detectSectionVisible = () => {
  const sections = ["HOME", "ABOUT", "TOUR", "FAQ", "CONTACT"]
  const tops = sections.map((section: string) => {
    const top = document.getElementById(section)?.getBoundingClientRect().top
    if (top !== undefined) {
      return (Math.abs(top) ?? 0)
    }
  })
  //@ts-ignore
  const lowerNumber = [...tops].sort((a: number, b: number) => {
    return a - b;
  })[0]
  const sectionActive = tops.indexOf(lowerNumber)
  return (sections[sectionActive])
}