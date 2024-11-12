import "./ResultBox.css"
import { CopyButton } from "./components/CopyButton" 
export const ResultBox = ({processedMessage}) => {
  return (
    <div className="container-element">
    <div className="content-label-result">
      <div className="label">Resultado</div>
      {processedMessage != "" && <CopyButton text={processedMessage} textContainerId="processedMessage" />}
    </div>
    <div id="processedMessage" className="messageEncrypted">
      {processedMessage}
    </div>
  </div>
  )
}
