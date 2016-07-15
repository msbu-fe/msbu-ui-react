import * as React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';
import Checkbox from './Checkbox.web';
import splitObject from '../_util/splitObject';
function noop() {}

export interface AgreeItemProps {
  prefixCls?: string;
  style?: React.CSSProperties;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: Function;
}

export default class AgreeItem extends React.Component<AgreeItemProps, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'am-checkbox',
    name: '',
    checked: false,
    disabled: false,
    onChange: noop,
  };

  render() {
    let[{ prefixCls, style, name, checked, disabled, children, onChange, className }, restProps] = splitObject(this.props,
      ['prefixCls', 'style', 'name', 'checked', 'disabled', 'children', 'onChange', 'className']);
    const wrapCls = classNames({
      [`${prefixCls}-agree`]: true,
      [className]: className
    });

    return (<div
      {...restProps}
      className={wrapCls}
      style={style}>
      {<Checkbox
        prefixCls={prefixCls}
        checked={checked}
        name={name}
        onChange={onChange}
        disabled={disabled}
      />}
      <label className={`${prefixCls}-agree-label`} htmlFor={name}>{children}</label>
    </div>);
  }
}