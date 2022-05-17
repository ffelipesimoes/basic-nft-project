import './App.css'
import { CollectionCard } from './components/CollectionCard'
import { Header } from './components/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Punklist } from './components/PunkList'
import { Main } from './components/Main'

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0xDCBA0516a0F63D1C66F1e14b44d147F0DF0D2630'
      )
      setPunkListData(openSeaData.data.assets)
    }

    getMyNfts()
  }, [])

  const newPunkList = []
  punkListData.forEach(element => {
    newPunkList.unshift(element)
  })
  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          {/* <Main punkListData={punkListData} selectedPunk={selectedPunk} /> */}
          <Main selectedPunk={selectedPunk} punkListData={newPunkList} />
          <Punklist
            punkListData={newPunkList}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  )
}

export default App
