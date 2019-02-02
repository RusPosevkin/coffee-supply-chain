# Coffee Supply Chain
This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

## Prerequisites

* Truffle v5.0.3 (core: 5.0.3)
* Solidity - ^0.4.25 (solc-js)
* Node v10.14.1

## How To Start
1. Clone this repository
2. Change directory to ```app``` folder and install all requisite npm packages:
```
cd app
npm install
```
3. Launch ganache:
```
npm run ganache 
```
4. In a separate terminal window, Compile smart contracts:
```
npm run compile 
```
5. Migrate smart contracts to the locally running blockchain, ganache-cli:
```
npm run migrate 
```
6. Test smart contracts:
```
npm run test 
```
7. In a separate terminal window, launch the DApp:
```
npm run dev
```

## Deployed contract (Rinkeby) 
Transaction ID – 0x16668341d7f7253e350ee081f97624fd6cb54dc4344eea90633ec832c4138f1a
Contract ID – 0xB09E439d7D04637Bf1897b70e07CccCcBf77e292

https://rinkeby.etherscan.io/address/0xb09e439d7d04637bf1897b70e07cccccbf77e292

### Transaction History 
* Harvested - 0xd0f3b470e2a2ca6b2b1bf4f678cf2493f2626b817f34457bef7bd51f1b417a17
* Processed - 0xef5d7d0e2bcae289b462662db42ece016e29eb50701a07f8a6bb2602f5693f1f
* Packed - 0xf98d1c593b8008c7190750834d02884ac91a33358c19c0f76fbdfa0f16038c60
* ForSale - 0x8e9df2adc9908fd85186fda662eee25eaffd5eae6e3ee8380e8b1dcfa0082714
* Sold - 0x5c60d83e97dc69e4506a6d4bc10b8007309dabbda468dfe121722bf35cba37ce
* Shipped - 0x246aaba6ab870251b7af5a441e63eb8a58e77d231fea737df29146dd3580f378
* Received - 0xa740a765becbbf69a13732b7cd648022f41acb8629a22da6b8c9be50e84ea557
* Purchased - 0xaded69c30b2a17a533da7d20ca660586a85357af5f23935d573465f983a92aa2

### Deployment Log 
```
⚠️  Important ⚠️
If you're using an HDWalletProvider, it must be Web3 1.0 enabled or your migration will hang.


Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 7000000


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > account:             0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
   > balance:             15.517660724000000001
   > gas used:            262398
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.000524796 ETH

   -------------------------------------
   > Total cost:         0.000524796 ETH


2_deploy_contracts.js
=====================

   Deploying 'FarmerRole'
   ----------------------
   > account:             0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
   > balance:             15.516861394000000001
   > gas used:            372657
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.000745314 ETH


   Deploying 'DistributorRole'
   ---------------------------
   > account:             0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
   > balance:             15.516116080000000001
   > gas used:            372657
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.000745314 ETH


   Deploying 'RetailerRole'
   ------------------------
   > account:             0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
   > balance:             15.515370510000000001
   > gas used:            372785
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.00074557 ETH


   Deploying 'ConsumerRole'
   ------------------------
   > account:             0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
   > balance:             15.514625196000000001
   > gas used:            372657
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.000745314 ETH


   Deploying 'SupplyChain'
   -----------------------
   > account:             0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
   > balance:             15.509452358000000001
   > gas used:            2586419
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.005172838 ETH

   -------------------------------------
   > Total cost:          0.00815435 ETH


Summary
=======
> Total deployments:   6
> Final cost:          0.008679146 ETH

⚠️  Important ⚠️
If you're using an HDWalletProvider, it must be Web3 1.0 enabled or your migration will hang.


Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 7008429


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xbad522c1a92e3bcdcbd4126fb657850d2d3970d01deaf4c1df8179a0b62bf4ad
   > Blocks: 0            Seconds: 4
   > contract address:    0x0c789c8A78e634034f1E9Fe85667474958C913DA
   > account:             0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
   > balance:             15.512637560000000001
   > gas used:            277398
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00554796 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00554796 ETH


2_deploy_contracts.js
=====================

   Deploying 'FarmerRole'
   ----------------------
   > transaction hash:    0x66582fedda242b4a93dc37e12e25571a31d3bea843abe8a318035b9f8f56d844
   > Blocks: 0            Seconds: 12
   > contract address:    0xec105bf038e59e961C0D499505991BA7b3d93Ec1
   > account:             0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
   > balance:             15.504044260000000001
   > gas used:            387657
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00775314 ETH


   Deploying 'DistributorRole'
   ---------------------------
   > transaction hash:    0xe737598f6d96b26acb3b5782d70c390623e4dd63174ed05b395dd7d22aeea85a
   > Blocks: 0            Seconds: 9
   > contract address:    0xD980fFeF2727fd636b9F40D80C57983E35D90F25
   > account:             0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
   > balance:             15.496291120000000001
   > gas used:            387657
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00775314 ETH


   Deploying 'RetailerRole'
   ------------------------
   > transaction hash:    0x9d4ad74f030573e3d85418da21453fc9882026410bf93acbec1014704cae0440
   > Blocks: 0            Seconds: 8
   > contract address:    0x7FC581932884e9328EdA35E48AD70c9DECf634ff
   > account:             0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
   > balance:             15.488535420000000001
   > gas used:            387785
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0077557 ETH


   Deploying 'ConsumerRole'
   ------------------------
   > transaction hash:    0x24ed748e0fdd6cf11805d5d76949098ae74ebfa307692b2251bae8e921f9b47a
   > Blocks: 0            Seconds: 8
   > contract address:    0x2ED88E1eC2E422029beADba37f5d387bE94f7c32
   > account:             0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
   > balance:             15.480782280000000001
   > gas used:            387657
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00775314 ETH


   Deploying 'SupplyChain'
   -----------------------
   > transaction hash:    0x16668341d7f7253e350ee081f97624fd6cb54dc4344eea90633ec832c4138f1a
   > Blocks: 0            Seconds: 8
   > contract address:    0xB09E439d7D04637Bf1897b70e07CccCcBf77e292
   > account:             0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
   > balance:             15.427253900000000001
   > gas used:            2676419
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.05352838 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0845435 ETH


Summary
=======
> Total deployments:   6
> Final cost:          0.09009146 ETH
```