import stylesRive from '../styles/riveAnimation.module.scss';
import RiveComponent from '@rive-app/react-canvas';
import { usc } from '../utils/helpers';

export type RiveAnimationProps = {
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
  animationName: string;
  extraClassName?: string;
  className?: string;
}
export const RiveAnimation = ({ top, left, right, bottom, animationName, extraClassName, className }: RiveAnimationProps) => {
  return (
    <div className={usc(stylesRive, ['RiveAnimation', className ? className : ''])} style={{ top, right, left, bottom }}>
      <RiveComponent src={`/animation/${animationName}.riv`} className={extraClassName ? usc(stylesRive, [extraClassName]) : ''} />
    </div>
  )
}