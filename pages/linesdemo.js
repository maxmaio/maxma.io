import dynamic from 'next/dynamic'


const DynamicComponent = dynamic(() => import('../components/lines'))

export default function Home() {
    return (
        
      <DynamicComponent />
    )

    }