"use client";
import styles from './page.module.css'
import { MDBDataTable } from 'mdbreact';
import { Suspense, useState, useEffect } from 'react'
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql } from "@apollo/client";
import Layout from "./layout"
import Loading from './loading';

const query = gql`query Now {
  userList {
    userName,
    email,
    companyName,
    LinkedInUrl,
    phone
 }
}`;

export default function Home() {
  const [userList, setUserList] = useState({
    columns: [
      {
        label: 'UserName',
        field: 'userName',
        width: 150
      },
      {
        label: 'Email',
        field: 'email',
        width: 270
      },
      {
        label: 'Phone',
        field: 'phone',
        width: 200
      },
      {
        label: 'LinkedIn Url',
        field: 'LinkedInUrl',
        width: 200
      },

      {
        label: 'company Name',
        field: 'companyName',
        width: 200
      },
    ],
    rows: [


    ]
  })
  const { data } = useSuspenseQuery(query);

  useEffect(() => {
    setUserList({ ...userList, rows: data?.userList })

  }, [data?.userList?.length])

  return (
    <Layout>
      <main className={styles.main}>
        <Suspense fallback={<Loading />}>

          <MDBDataTable
            noBottomColumns={true}
            striped
            bordered
            small
            paging={false}
            data={userList}
            sorting={false}

          />
        </Suspense>
      </main>
    </Layout >
  )
}
