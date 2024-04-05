import React from "react";
import classNames from "classnames";

type InputProps = {
  field: {
    name: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    onBlur: React.FocusEventHandler<HTMLTextAreaElement>;
  };
  placeholder: string;
  className: string;
  isTitle: boolean;
  error?: string;
};

const TextArea = ({field, placeholder, className, isTitle, error}: InputProps) => {
  return <div className={`contact__block ${className}`}>
    {isTitle && <span className="contact__inputTitle">{placeholder}</span>}
    <textarea
      className="contact__field"
      placeholder={placeholder}
      {...field}
    />
    <span className={classNames("border_show", {"contact__errorBorder": error})}/>
    {error && <span className="contact__error">{error}</span>}
  </div>
};
export default TextArea;