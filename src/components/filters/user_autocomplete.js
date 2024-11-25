// @flow
import React from 'react';
import { Async } from 'react-select';

export class UserAutocomplete extends React.PureComponent {
  state = {
    value: null
  };
  props: {
    name: string,
    placeholder?: string,
    className?: string,
    onChange: (value: any) => void,
    value: any,
    multi?: boolean
  };
  //   onChange = (value: ?Array<Object>) => {
  //     if (Array.isArray(value) && value.length === 0)
  //       return this.setState({ value: null });
  //     this.setState({
  //       value
  //     });
  //   };

  render() {
    return (
      <Async
        className={this.props.className}
        multi={this.props.multi}
        name={this.props.name || 'user_autocomplete'}
        cache={false}
        value={this.props.value || null}
        onChange={this.props.onChange}
        placeholder={this.props.placeholder || 'users'}
        autoload={false}
      />
    );
  }
}
