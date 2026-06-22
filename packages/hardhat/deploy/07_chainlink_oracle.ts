import { deployScript } from "../rocketh/deploy.js";
import * as artifacts from "../generated/artifacts/index.js";

export default deployScript(
  async (env) => {
    const {
      deploy,
      get,
      execute,
      namedAccounts,
    } = env;

    const { deployer } =
      namedAccounts;

    const provider =
      await get(
        "PoolAddressesProvider",
      );

    const usdc =
      await get(
        "MockUSDC",
      );
    const weth =
      await get(
        "MockWETH",);
    const usdcFeed =
      await deploy(
        "MockAggregatorUSDC",
        {
          account: deployer,
          artifact:
            artifacts.MockAggregator,
          args: [
            100000000n,
          ],
        },
      );
    console.log(
      "USDC Feed =",
      usdcFeed.address,
    );


    const ethFeed =
      await deploy(
        "MockAggregatorETH",
        {
          account: deployer,
          artifact:
            artifacts.MockAggregator,
          args: [
            2000n * 100000000n,
          ],
        },
      );
      console.log(
        "ETH Feed =",
        ethFeed.address,
      );
    const oracle =
      await deploy(
        "AaveOracle",
        {
          account:
            deployer,

          artifact:
            artifacts.AaveOracle,

          args: [
            provider.address,
            [
              usdc.address,
              weth.address,
            ],
            [
              usdcFeed.address,
              ethFeed.address,
            ],

            // fallbackOracle
            "0x0000000000000000000000000000000000000000",

            "0x0000000000000000000000000000000000000000",
            100000000n,

          ],
        },
      );

    console.log(
      "AaveOracle =",
      oracle.address,
    );

    await execute(
      provider,
      {
        account:
          deployer,

        functionName:
          "setPriceOracle",

        args: [
          oracle.address,
        ],
      },
    );
    console.log(
      "Price Oracle updated"
    );

    console.log(
      "Oracle migrated to Mock Oracle",
    );
  },
  {
    tags: [
      "mock-oracle",
    ],
    
  },
);