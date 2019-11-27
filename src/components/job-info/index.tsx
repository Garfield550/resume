import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import WorkInfo, { WorkInfoProps } from '../work-info';

import '../../styles/job-info.scss';

export interface JobInfoProps {
  className?: string;
  title: string;
  desc?: string;
  startTime?: string;
  endTime?: string;
  workInfo?: Array<Omit<WorkInfoProps, 'className'>>;
}

const JobInfo: React.FC<JobInfoProps> = ({
  className,
  title,
  desc = '',
  startTime = '',
  endTime = '至今',
  workInfo = [],
}) => {
  const rootClass = classNames('re--job-info', className);
  return (
    <div className={rootClass}>
      <div className='re--job-info--jobs'>
        <h3 className='re--job-info--job-title'>{title}</h3>
        <p className='re--job-info--job-desc'>
          {desc}
          {startTime && (
            <span className='re--job-info--job-time'>
              {startTime} – {endTime}
            </span>
          )}
        </p>
      </div>
      {workInfo && (
        <div className='re--job-info--works'>
          {workInfo.map(
            (work: Omit<WorkInfoProps, 'className'>, index: number) => {
              return (
                <WorkInfo
                  className='re--job-info--work-info'
                  key={`work-info-${index}`}
                  name={work.name}
                  desc={work.desc}
                />
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

JobInfo.defaultProps = {
  desc: '',
  startTime: '',
  endTime: '至今',
  workInfo: [],
};

JobInfo.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  workInfo: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      desc: PropTypes.string,
    }).isRequired
  ),
};

export default JobInfo;
