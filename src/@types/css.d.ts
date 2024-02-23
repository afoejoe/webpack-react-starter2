type ClassNames = Record<string, string>

declare module '*.module.css' {
  const classNames: ClassNames
  export default classNames
}
