import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const index = ({ props }) => {

    //get productID from NextJS slug url

    const router = useRouter()
    const propertyId = router.query.propertyId

    return (
        <>
            <Head>
                <title>{`Aqar Misr | Property ${propertyId}`}</title>
                <meta name="description" content="" />
            </Head>
            <div>
                <p>Property Details page</p>
                <p>Property ID: {router.query.propertyId}</p>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    return { paths: [], fallback: true };
}

export async function getStaticProps() {
    return { props: {} };
}

export default index