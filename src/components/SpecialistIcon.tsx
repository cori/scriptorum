import React from 'react';

type Props = {
  specialism: string;
};

export function SpecialistIcon(props: Props) {
  return (props.specialism
    ? <img className='specialism' style={{height: '1em', marginRight: '10px'}} alt={props.specialism} src={`/scriptorum/icons/${props.specialism.toLowerCase()}.svg`}/>
    : <></>
  );
}
