import "./ResultBox.css"
import { CopyButton } from "./components/CopyButton" 
export const ResultBox = ({processedMessage}) => {
  return (
    <div className="container-result">
    <div className="content-label-result">
      <div className="result-label">Resultado</div>
      {processedMessage != "" && <CopyButton text={processedMessage} textContainerId="processedMessage" />}
    </div>
    <div id="processedMessage" className="messageEncrypted">
      {processedMessage}
    </div>
  </div>
  )
}
