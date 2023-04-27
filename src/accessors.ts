import SimulateTxAccessor130 from './assets/v1.3.0/simulate_tx_accessor.json';
import SimulateTxAccessor140 from './assets/v1.4.0/simulate_tx_accessor.json';

import { DeploymentFilter, SingletonDeployment } from './types'
import { findDeployment } from './utils'

// This is a sorted array (newest to oldest)
const accessorDeployments: SingletonDeployment[] = [
    SimulateTxAccessor140, SimulateTxAccessor130
]

export const getSimulateTxAccessorDeployment = (filter?: DeploymentFilter): SingletonDeployment | undefined => {
    return findDeployment(filter, accessorDeployments)
}