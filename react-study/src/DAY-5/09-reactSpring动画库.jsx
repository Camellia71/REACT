//reactSpring动画库:https://www.react-spring.dev/docs/getting-started
import { useSpring } from '@react-spring/web'

// 基础淡入动画示例
function FadeInBox() {
  const springs = useSpring({
    from: { opacity: 0, x: -100 },
    to: { opacity: 1, x: 0 },
    config: { duration: 1000 },
  })

  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        background: '#ff6d6d',
        borderRadius: 8,
        ...springs,
      }}
    />
  )
}

// 鼠标交互弹簧动画
function InteractiveCard() {
  const [springs, api] = useSpring(() => ({
    from: { scale: 1, rotate: 0 },
  }))

  const handleMouseEnter = () => {
    api.start({ scale: 1.2, rotate: 10 })
  }

  const handleMouseLeave = () => {
    api.start({ scale: 1, rotate: 0 })
  }

  return (
    <animated.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: 120,
        height: 120,
        background: '#6d9eff',
        borderRadius: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer',
        ...springs,
      }}
    >
      悬停我
    </animated.div>
  )
}

// 列表项交错动画
function StaggeredList() {
  const items = ['React', 'Vue', 'Angular', 'Svelte']

  const springs = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    config: { tension: 300, friction: 20 },
    delay: 200,
  })

  return (
    <div>
      {items.map((item, index) => (
        <animated.div
          key={item}
          style={{
            padding: '12px 24px',
            margin: '8px 0',
            background: '#f0f0f0',
            borderRadius: 8,
            transform: springs.y.to(y => `translateY(${y + index * 10}px)`),
            opacity: springs.opacity,
          }}
        >
          {item}
        </animated.div>
      ))}
    </div>
  )
}

// 数字滚动动画
function AnimatedNumber({ value }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    delay: 200,
    config: { mass: 1, tension: 120, friction: 14 },
  })

  return <animated.span>{number.to(n => n.toFixed(0))}</animated.span>
}

// 组合动画组件
export default function SpringDemo() {
  return (
    <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 40 }}>
      <section>
        <h3>淡入动画</h3>
        <FadeInBox />
      </section>
      
      <section>
        <h3>交互弹簧动画</h3>
        <InteractiveCard />
      </section>
      
      <section>
        <h3>交错列表动画</h3>
        <StaggeredList />
      </section>
      
      <section>
        <h3>数字动画</h3>
        <div style={{ fontSize: 48, fontWeight: 'bold', color: '#ff6d6d' }}>
          <AnimatedNumber value={100} />
        </div>
      </section>
    </div>
  )
}
