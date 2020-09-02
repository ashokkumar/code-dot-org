import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TipWithTooltip from './TipWithTooltip';
import AddLevelDialog from './AddLevelDialog';
import AddResourceDialog from './AddResourceDialog';
import EditTipDialog from './EditTipDialog';

const styles = {
  bottomControls: {
    height: 30,
    display: 'flex',
    justifyContent: 'space-between'
  },
  addLevel: {
    fontSize: 14,
    background: '#eee',
    border: '1px solid #ddd',
    boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.8)',
    margin: '0 5px 0 0'
  }
};

export default class ActivitySectionCardButtons extends Component {
  static propTypes = {
    activitySection: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      addTipOpen: false,
      addResourceOpen: false,
      addLevelOpen: false
    };
  }

  handleOpenAddLevel = () => {
    this.setState({addLevelOpen: true});
  };

  handleCloseAddLevel = () => {
    this.setState({addLevelOpen: false});
  };

  handleOpenAddTip = () => {
    this.setState({addTipOpen: true});
  };

  handleCloseAddTip = () => {
    this.setState({addTipOpen: false});
  };

  handleOpenAddResource = () => {
    this.setState({addResourceOpen: true});
  };

  handleCloseAddResource = () => {
    this.setState({addResourceOpen: false});
  };

  render() {
    return (
      <div>
        <div style={styles.bottomControls}>
          <span>
            {this.props.activitySection.type === 'progression' && (
              <button
                onMouseDown={this.handleOpenAddLevel}
                className="btn"
                style={styles.addLevel}
                type="button"
              >
                <i style={{marginRight: 7}} className="fa fa-plus-circle" />
                Add Level
              </button>
            )}
            <button
              onMouseDown={this.handleOpenAddTip}
              className="btn"
              style={styles.addLevel}
              type="button"
            >
              <i style={{marginRight: 7}} className="fa fa-plus-circle" />
              Add Tip
            </button>
            <button
              onMouseDown={this.handleOpenAddResource}
              className="btn"
              style={styles.addLevel}
              type="button"
            >
              <i style={{marginRight: 7}} className="fa fa-plus-circle" />
              Add Resource Link
            </button>
          </span>
          {this.props.activitySection.tips.length > 0 && (
            <span>
              {this.props.activitySection.tips.map(tip => {
                return <TipWithTooltip tip={tip} key={tip.markdown} />;
              })}
            </span>
          )}
        </div>
        <AddResourceDialog
          isOpen={this.state.addResourceOpen}
          handleConfirm={this.handleCloseAddResource}
        />
        <EditTipDialog
          isOpen={this.state.addTipOpen}
          handleConfirm={this.handleCloseAddTip}
          tip={{
            type: 'teachingTip',
            markdown: ''
          }}
        />
        {this.props.activitySection.type === 'progression' && (
          <AddLevelDialog
            isOpen={this.state.addLevelOpen}
            handleConfirm={this.handleCloseAddLevel}
            currentLevels={this.props.activitySection.levels}
          />
        )}
      </div>
    );
  }
}
