export const networkCollections = {
  "0x13881": [
    //Add Your Collections here
    {
      image:
        "https://lh3.googleusercontent.com/BWCni9INm--eqCK800BbRkL10zGyflxfPwTHt4XphMSWG3XZvPx1JyGdfU9vSor8K046DJg-Q8Y4ioUlWHiCZqgR_L00w4vcbA-w=s0",
      name: "Test Mages",
      addrs: "0x275d553f426355c20b134D944B5b28D31CDb83DA",
    },
    {
      image:
        "https://ipfs.moralis.io:2053/ipfs/QmfLbpeVHxReWKNLaXTPcWiafi49eoAL4gRwMGuXtx2Eqe/images/14.png",
      name: "Pixel Show",
      addrs: "0xCA34404dD8Bd6537BE76F3A51B379F8949bD7973",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aC1UzHTn37QlVbzkkvxUIsVSUMQFBhZSZhmnz13CpH_OTzAlIFvHXknDjQnlLTNV5wctNc3721zB5OhUe7AUJLFWK7f-IF9jnK_TOF4=s130",
      name: "Mint a Ghost",
      addrs: "0x6b67C5CF4A74E405B1B0dDCf334cd5062322EBf2",
    },
  ],

 
};

export const getCollectionsByChain = (chain) => networkCollections[chain];
