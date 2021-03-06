import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TokenABI from '../../contracts/tokens/IpToken.json'
import { useEffect, useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import LineChart from 'react-linechart';
import Web3 from 'web3';

export default function Home() {
  // this is for Rinkeby, for reference Mainnet address is: wss://mainnet.infura.io/ws/v3/db51ea2d48cd4c7aae46d876b1e1dab3
  let web3 = new Web3(new Web3.providers.WebsocketProvider("wss://rinkeby.infura.io/ws/v3/db51ea2d48cd4c7aae46d876b1e1dab3"));
  
  // token abi stuff
  const [tokenSupply, setTokenSupply] = useState(null);

  useEffect(() => {
    async function fetchTokenHoldings() {
      if (typeof web3.eth !== 'undefined') {
        // Token Contract Address
        const tokenContractAddress = "0xB3fBf885c2713537BcB699be129dfc2Ad2DE84b2";
        // Token Contract 
        let tokenContract = new web3.eth.Contract(TokenABI, tokenContractAddress);
        try {
          const tokenHoldings = await tokenContract.methods.totalSupply().call()
          setTokenSupply(web3.utils.fromWei(tokenHoldings))
        } catch(err) {
          console.log("errrorrr: ", err)
          return;
        }
      }
    }
    fetchTokenHoldings()
  }, [])

  const data = [
    {									
        color: "steelblue", 
        points: [{x: 1, y: 50}, {x: 3, y: 100}, {x: 7, y: tokenSupply / 1000000}],
    }
  ];

  const numberWithCommas = (number) => {
    if (!number) return '0';
    const [wholePart, decimalPart] = number.toString().split('.');
  
    return (
      wholePart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
      `${
        decimalPart
          ? `.${decimalPart}`
          : number.toString().indexOf('.') > -1
          ? '.'
          : ''
      }`
    );
  };
 
  return (
    <div className={styles.container}>
      <Head>
        <title>IPOR Sample Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon-ipor.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          IPOR Sample Dashboard
        </h1>
        {/* <div className={styles.card}>
          <p className={styles.description}>Token Amount: {tokenSupply ? numberWithCommas(Number(tokenSupply).toFixed(2)) : null }</p>
        </div> */}
      </main>
      <div className={styles.chartCard}>
        <h2>Total Supply (in millions) of ipDAI over Time</h2>
        <LineChart 
          width={600}
          height={400}
          data={data} 
          xLabel={"# Months"}
          yLabel={"Total Supply"} 
          margins={{ top: 50, right: 20, bottom: 50, left: 75 }}
        />
      </div>
      <PieChart
        data={[
          { title: 'One', value: 10, color: '#E38627' },
          { title: 'Two', value: 15, color: '#C13C37' },
          { title: 'Three', value: 20, color: '#6A2135' },
        ]}
        radius={10}
      />;
    </div>
  )
}
