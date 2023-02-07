declare type Warning = (valid: boolean, component: string, message?: string) => void;
declare let warning: Warning;
export default warning;
