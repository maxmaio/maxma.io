import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('../components/homePage'))

export default function Home() {
  return (
    <div>
      <DynamicComponent />
    </div>
  )
}
