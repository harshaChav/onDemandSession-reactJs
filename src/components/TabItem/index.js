import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabActiveId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onChangeTab = () => {
    updateTabActiveId(tabId)
  }

  const activeTabClassname = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassname}`}
        onClick={onChangeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
