import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Table, Input, Spacer } from '@nextui-org/react';
import Plot from 'react-plotly.js';

export default function Home() {
  const columns = [
    {
      key: "ticker",
      label: "TICKER",
    },
    {
      key: "assets",
      label: "ASSETS",
    },
    {
      key: "liabilities",
      label: "LIABILITIES",
    },
    {
      key: "revenue",
      label: "REVENUE",
    },
    {
      key: "cor",
      label: "COST OF REVENUE",
    },
    {
      key: "netincome",
      label: "NET INCOME",
    },
    {
      key: "health",
      label: "HEALTH",
    },
  ];
  const rows = [
    {
      key: 1,
      ticker: "N/A",
      assets: "0",
      liabilities: "0",
      revenue: "0",
      cor: "0",
      netincome: "0",
      health: "N/A",
    },
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>Robusto</title>
        <meta name="description" content="Research corporate financial health" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Robusto!
        </h1>
        
        <p className={styles.description}>
        An open source tool for studying corporate health. No data is guaranteed to be correct and nothing constitutes financial advice.  
        </p>
        <Spacer y={0.5} />
        <>
      <Input clearable bordered width="750px" labelPlaceholder="Enter a ticker or company name..." initialValue="" />
    </>
    <Spacer y={1.2} />
        <Table
          aria-label="Financial data"
          css={{
            height: "auto",
            minWidth: "850px",
          }}
          selectionMode="multiple"
          >
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column key={column.key}>{column.label}</Table.Column>
            )}
          </Table.Header>
          <Table.Body items={rows}>
            {(item) => (
              <Table.Row key={item.key}>
                {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
        <br></br>
        <p className={styles.smalldescription}>
        Click a row above to start creating a chart below...  
        </p>
        
        <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: '#ffa600'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 850, height: 500} }
      />
      </main>

      <footer className={styles.footer}>
            Made with ❤️ in the ⛰️
      </footer>
    </div>
  )
}
