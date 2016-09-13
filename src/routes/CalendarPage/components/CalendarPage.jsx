import React, { PureComponent, PropTypes as pt } from 'react'
import Helmet from 'react-helmet'
import Calendar from '../../../components/Calendar'

import styles from './CalendarPage.scss'

class CalendarPage extends PureComponent {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    holidays: pt.object,
    country: pt.string,
    year: pt.string,
    error: pt.string
  };

  static defaultProps = {
    holidays: {}
  };

  render() {
    const { holidays, country, year, error } = this.props

    return (
      <div className={styles.demo}>
        <Helmet title='Calendar' />
        { error && <b>{error}</b> }
        <Calendar
          holidays={holidays}
          country={country}
          year={year}
        />
      </div>
    )
  }
}

export default CalendarPage
