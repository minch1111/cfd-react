import React from 'react'
import PayHistory from '../../../components/PayHistory'

function Payment(props) {
    return (
        <div className="tab4">
                  {
                      props.payHistory.map((value,key)=>(
                          <PayHistory 
                          key={key}
                          name = {value.name}
                          date = {value.date}
                          cost = {value.cost}
                          />
                      ))
                  }
                </div>
    )
}

export default Payment
