import './index.css'

const TabItem = props => {
  const {tabItemDetails, updateTabItem, isActive} = props
  const {displayText, tabId} = tabItemDetails
  const activeTab = isActive ? 'tab-button active' : 'tab-button'
  const onClickTabId = () => {
    updateTabItem(tabId)
  }
  return (
    <li className="tab-item" onClick={onClickTabId}>
      <button type="button" className={activeTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
