import React from 'react';
import {Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import styles from '../../scss/styles';

class GudDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue || '',
    };
    this.selections = this.selections.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  selections() {
    var options = this.props.items.map((item, index) => {
      return {
        label: item.label.toString(),
        value: item.label.toLowerCase(),
        icon: () =>
          item.icon ? (
            <Image style={styles.gudIcon} source={item.icon} />
          ) : null,
        hidden: index == 0 ? true : false,
      };
    });
    return options;
  }
  handleChange(item) {
    this.setState({
      value: item.value,
    });
    this.props.onItemSelected(item.value);
  }
  render() {
    return (
      <DropDownPicker
        items={this.selections()}
        defaultValue={this.state.value}
        containerStyle={styles.gudDropDownContainer}
        style={[styles.gudDropDown]}
        labelStyle={[
          {fontFamily: ESS.value('$rg')},
          this.props.fontFamily,
          this.props.fontSize,
        ]}
        placeholder={'Selecciona una opción'}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={styles.gudDropDownItems}
        onChangeItem={(item) => this.handleChange(item)}
      />
    );
  }
}

export default GudDropDown;
