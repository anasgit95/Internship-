
import React from 'react';
import MultiSelect from "@khanacademy/react-multi-select";

const options = [
  {label: "Android", value: 1},
  {label: "IOS", value: 2},
  {label: "React", value: 3},
  {label: "Javascript", value: 4},
  {label: "PHP", value: 5},
  {label: "html5", value: 6},
  {label: "Mysql", value: 7},
  {label: "C++", value: 8},
  {label: "C#", value: 9},
];

class Modals extends React.Component {
  state = {
    selected: [],
  }

  render() {
    const {selected} = this.state;

    return <MultiSelect
      options={options}
      selected={selected}
      onSelectedChanged={selected => this.setState({selected})}
    />
  }
}
export default Modals;
