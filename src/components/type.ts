export interface IDropdownProps {
    value: number | string | undefined;
    options: Array<IDropdownPropsOptions | IDropdownPropsOptionsWithParams>;
}
export interface IDropdownPropsOptions {
    label: string;
    value: number | string;
}

export interface IDropdownPropsOptionsWithParams extends IDropdownPropsOptions {
    params?: ISchemeParamsItem[]
}
export interface ISchemeParamsItem {
    key: string,
    require?: boolean,
    info?: string,
    enum?: string[]
}