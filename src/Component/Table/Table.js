import React from "react"
import { Table, Container, Button } from "react-bootstrap"
import Chart from "../../assets/image/Chart.png"
import { data1, data2 } from "../DataDummy/Dummydata"

function TableComponent() {
  const [data, setData] = React.useState(data1)

  return (
    <Container className="marketCrypto">
      <div className="text-center mt-5">
        <Button
          onClick={() => setData(data1)}
          variant="light"
          className="textMarket fw-bold me-4"
        >
          Token Populer
        </Button>
        <Button
          onClick={() => setData(data2)}
          variant="light"
          className="textMarket fw-bold me-4"
        >
          Token Baru
        </Button>
        <Button variant="light" className="textMarket fw-bold me-4">
          Peringkat 24 Jam
        </Button>
        <Button variant="light" className="textMarket fw-bold me-4">
          Peringkat Omset
        </Button>
      </div>
      <Table className="mt-5" responsive="sm">
        <tbody>
          <tr>
            <td className="text-center">Token</td>
            <td className="text-center">Harga</td>
            <td className="text-center">Perubahan hari ini</td>
            <td className="text-center">Bagan</td>
            <td className="text-center">Dagang</td>
          </tr>
          {data.map((item, index) => {
            return (
              <tr>
                <td className="d-flex  py-3">
                  <img
                    src={item.image}
                    height={35}
                    width={35}
                    alt="Logo Coin.png"
                  />
                  <span className="ms-3 fw-bold text-center">
                    {item.code}{" "}
                    <span className="textCoin text-center">
                      {item.fullName}
                    </span>
                  </span>
                </td>
                <td className="fw-bold text-center py-3">{item.price}</td>
                <td className="textPersen fw-bold text-center py-3 ">
                  {item.persen}
                </td>
                <td className="text-center py-3">
                  <img src={Chart} width={100} height={35} />
                </td>
                <td className="text-center py-3">
                  <Button className="btnBuy px-3 fw-bold " variant="light">
                    Beli
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  )
}

export default TableComponent
