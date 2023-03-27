import Head from 'next/head'
import { useSelector } from 'react-redux';

export default function Home() {
  const { user } = useSelector((store: any) => store.user);
  console.log(user)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className='container'>ssdfsdf</div>
    </>
  )
}
