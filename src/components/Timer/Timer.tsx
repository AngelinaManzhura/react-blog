import './Timer.scss'

type Props = {}

const Timer = (props: Props) => {
  return (
    <>
      <div className="timer">
        <div className="timer__items">
          <div className="timer__item timer__days">00</div>
          <div className="timer__item timer__hours">00</div>
          <div className="timer__item timer__minutes">00</div>
          <div className="timer__item timer__seconds">00</div>
        </div>
      </div>
    </>
  )
}

export default Timer
