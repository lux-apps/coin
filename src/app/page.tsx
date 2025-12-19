import React from 'react'

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          LUX Coin
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl">
          The Native Currency of Lux Network
        </p>
        <p className="text-lg text-gray-400 max-w-2xl">
          LUX is the native cryptocurrency powering all transactions and operations on the Lux blockchain.
        </p>
      </section>

      {/* Feature Sections */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Network Fuel</h2>
          <p className="text-lg text-gray-400">LUX powers every transaction, smart contract execution, and cross-chain bridge on the network.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Staking Rewards</h2>
          <p className="text-lg text-gray-400">Stake your LUX to secure the network and earn rewards for your contribution.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Governance</h2>
          <p className="text-lg text-gray-400">LUX holders participate in network governance, voting on proposals and protocol upgrades.</p>
        </div>
      </section>

    </main>
  )
}
