import React from 'react'
import { SelectData } from '../../dataschema/props'

const SelectComponent = (props:SelectData) => {
  return (
    <div className="container alert alert-info">
      <select className="form-select" onChange={(e) => props.selectedValue?.(e.target.value)}>
        <option value={props.propertyName}>Select an option</option>
        {props.dataSource.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectComponent
