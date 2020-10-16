import React from 'react';
import { Weapon } from '../types';
import { Table } from 'react-bootstrap';

const _ = require('lodash')

type Props = {
  weapons: Weapon[],
  phase: string,
  userStrength: number,
};

function WeaponList(props: Props) {
  const weapons = props.phase === 'shooting'
    ? props.weapons.filter((x) => (x.type !== "Melee"))
    : props.weapons.filter((x) => (x.type === "Melee"))

  return weapons.length === 0 ? <></> : (
    <Table striped bordered size="sm">
      <thead>
        <tr>
          <th>Weapon</th>
          {props.phase === "shooting" && <th>Range</th>}
          {props.phase === "shooting" && <th>Type</th>}
          <th>S</th>
          <th>AP</th>
          <th>D</th>
          <th>Abilities</th>
        </tr>
      </thead>
      <tbody>
        {_.sortBy(weapons, ['name']).map((x: Weapon) => (
          <tr>
            <td style={{"whiteSpace": "nowrap"}}>{x.name}</td>
            {props.phase === "shooting" && <td>{x.range}&quot;</td>}
            {props.phase === "shooting" && <td style={{"whiteSpace": "nowrap"}}>{x.type}</td>}
            <td>{x.strength}</td>
            <td>{x.armourPiercing}</td>
            <td>{x.damage}</td>
            <td>{x.abilities}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default WeaponList;