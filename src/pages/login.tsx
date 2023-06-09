import { NextPageContext } from "next"
import { getSession, signIn } from "next-auth/react"
import Head from "next/head"
import Image from "next/image"
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa"

export default function Login() {
  return (
    <section className="flex items-center justify-center h-screen bg-white">
      <Head>
        <title>Shoppingify</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white border-2 border-solid border-[#BDBDBD] rounded-3xl py-10 px-14 w-[42rem] overflow-scroll hideScrollbar">
        <div className="flex items-center mb-12 gap-x-6">
          <Image src="/images/logo.svg" alt="logo" width={42} height={42} />
          <span className="text-4xl font-bold text-main-orange">
            Shoppingify
          </span>
        </div>

        <div className="flex flex-col gap-y-5">
          <button
            onClick={() => signIn("google")}
            className="flex items-center h-20 px-8 text-2xl font-semibold text-white capitalize transition-all duration-200 bg-red-600 rounded-2xl gap-x-6 hover:bg-red-500"
          >
            <FaGoogle className="text-4xl" />
            continue with google
          </button>

          <button
            onClick={() => signIn("twitter")}
            className="flex items-center h-20 px-8 text-2xl font-semibold text-white capitalize transition-all duration-200 rounded-2xl gap-x-6 bg-sky-600 hover:bg-sky-500"
          >
            <FaTwitter className="text-4xl" />
            continue with twitter
          </button>

          <button
            onClick={() => signIn("github")}
            className="flex items-center h-20 px-8 text-2xl font-semibold text-white capitalize transition-all duration-200 bg-gray-700 rounded-2xl gap-x-6 hover:bg-gray-600"
          >
            <FaGithub className="text-4xl" />
            continue with github
          </button>

          {/* <button onClick={() => signOut()}>sign out</button> */}
        </div>
      </div>
    </section>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    }
  }

  return { props: {} }
}
