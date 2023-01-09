
let whitelistAddresses = [
	'0x6a8bB090384077d45815626E47131bCcEb607FB3',
	'0x7c1ed26a65E3E5B512d83649120Bd147f5bBD09E',
	'0xee984A26a8a0555fC6Bb25381ce373c560a3718E',
	'0x4d2E1A38d07Eadf5C62CfDaF93547DAe09F1EF83',
];

var contracts_m={
	otherdeed:{
		address:'0x17Dd127D494BC9f79a1Bf6C9A9Db2B2200141AC7',
		abi:[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isSaleActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxWhiteListAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfTokens","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfTokens","type":"uint256"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"mintForWhiteList","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintWhiteTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pricePer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceWhite","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_merkleRoot","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
        }
}

var flag = 0;
var provider;
var is_whitelist;
var myAccount;
var flag_white;
var ChainID;
async function metamaskConnect(){

    var modal__connect = document.getElementsByClassName('modal-warp');
    var modal__connect__item = modal__connect[0]
    modal__connect__item.style.display = 'none';

	if (typeof window.ethereum !== 'undefined') {
		var ethereum = window.ethereum
		ethereum.autoRefreshOnNetworkChange = false
		try {
			window.web3 = new Web3(ethereum);
            const enable = await ethereum.enable();
            provider = new Web3(ethereum);
            flag = 0;
            var accounts = await web3.eth.getAccounts();
            myAccount = accounts[0];
            ChainID = ethereum.chainId;
            is_whitelist = whitelistAddresses.includes(myAccount);
            if(is_whitelist){
                 flag_white = 1;
            }else{
                 flag_white = 0;
            }
            var account1 = myAccount.substr(0,5) + '....' + myAccount.substr(myAccount.length-4, myAccount.length)
			document.getElementById('ConnectWallet').innerText= account1;
			_display()
	        console.log(myAccount)

		} catch (e) {
			alert("Error:"+e);
		}
	} else {
		alert("Install metamask first，pls!");
	}
}

async function Init() {
    if (web3 != undefined) {
        const accounts = await web3.eth.getAccounts();

        myAccount = accounts[0];
        var account1 = myAccount.substr(0,5) + '....' + myAccount.substr(myAccount.length-4, myAccount.length)
		document.getElementById('ConnectWallet').innerText= account1;
		_display()

    }
}

async function _WalletContract() {
    var modal__connect = document.getElementsByClassName('modal-warp');
    var modal__connect__item = modal__connect[0]
    modal__connect__item.style.display = 'none';
    providers.enable().then((res) => {
        web3 = new Web3(providers);
        ChainID = providers.chainId;
		flag = 1;
		web3.eth.getAccounts(function (error, result) {
		myAccount = result[0];
		is_whitelist = whitelistAddresses.includes(result[0]);
		console.log(myAccount);
		if(is_whitelist){
                 flag_white = 1;
            }else{
                 flag_white = 0;
            }
		})
            providers.on("accountsChanged", (accounts) => {
                ChainID = providers.chainId;
                myAccount = result[0];
                is_whitelist = whitelistAddresses.includes(accounts[0]);
                flag = 1;
                if(is_whitelist){
                     flag_white = 1;
                }else{
                     flag_white = 0;
                }
                 _display();
                document.getElementById('ConnectWallet').innerHTML= accounts[0];
            });
            
            providers.on("disconnect", (code, reason) => {
                closeConnect();
            });
            
            Init((accounts) => {
                document.getElementById('ConnectWallet').innerHTML= accounts[0];
                is_whitelist = whitelistAddresses.includes(accounts[0])
                if(is_whitelist){
                    flag_white = 1;
                }else{
                    flag_white = 0;
                }
                 myAccount = accounts[0];
            })

    }).catch((err) => {
        alert("Fail:"+err);
    });
}

async function mint(i){

    if(flag_white==0){
		try {
             if(flag == 0){
                var ethereum = window.ethereum;
                provider = new Web3(ethereum);
             }else{
                provider = new Web3(providers);
             }
             console.log(1)
			var contract =new provider.eth.Contract(contracts_m.otherdeed.abi,contracts_m.otherdeed.address);
			console.log(2)
			provider.eth.getAccounts(function (error, result) {
				if (!error){
					var account = result[0];
                    var Value = i * 0.01 *10 **18;
		    	    contract.methods.mint(i).send({from:account,value:Value},function(error,result){
                    }).on('transactionHash', function(hash){
    				   
    				}).on('confirmation', function(confirmationNumber, receipt){
    				    
    				}).on('receipt', function(receipt){
    				    alert('Mint '+i+' NFT success');
    				    document.getElementById('mintg').style.display='block';
    				}).on('error', console.error);
				}
			});

		} catch (e) {
			alert("Error:"+e);
		}
	}else {
	    if(flag == 0){
	            var ethereum = window.ethereum;
                provider = new Web3(ethereum);
                ChainID = ethereum.chainId;
             }else{
                provider = new Web3(providers);
                ChainID = providers.chainId;
             }

	                var contract = new provider.eth.Contract(contracts_m.otherdeed.abi,contracts_m.otherdeed.address);
	                var xhr = new XMLHttpRequest();
                    xhr.withCredentials = true;
                            $.ajax({
                    			type:'GET',
                                url:'http://114.116.97.234:9202/api/get',
                    			data:{address:myAccount},
                    			dataType: "json",
                    			success:function(res){
                    			    var proof = res;
                    				console.log(proof);
        					     var Value = i * 0.0001 *10 **18;
        				    	contract.methods.mintForWhiteList(i,proof).send({from:myAccount,value:Value},function(error,result){
        		                }).on('transactionHash', function(hash){
        
        						}).on('confirmation', function(confirmationNumber, receipt){
        
        						}).on('receipt', function(receipt){
        						  alert('Mint '+i+' NFT success');
        						  document.getElementById('mintg').style.display='block'
        						}).on('error', console.error);
        
                    			}
                    		})
        }
}

function _display(){
    var exit_account = document.getElementById("cleanwallet");
	exit_account.style.display = 'block'
	document.getElementById("MINT_it").innerText="MINT";
    document.getElementById("mintblock").style.display='flex';
    document.getElementById("MINT_it").style.display='none'
    document.getElementById('nftPrice').style.display='block'
    document.getElementById('nftNum').style.display='block'
    if(flag_white==1){
        document.getElementById('nftPrice').innerHTML="Whitelist: Price 0.006 ETH"
        document.getElementById('nftNum').innerHTML="Whitelist: UP to 5 per wallet"
        document.getElementById("minta").style.display='inline-block'
        document.getElementById("mintb").style.display='inline-block'
        document.getElementById("mintc").style.display='inline-block'
        document.getElementById("mintd").style.display='inline-block'
        document.getElementById("minte").style.display='inline-block'
    }else {
        document.getElementById('nftPrice').innerHTML="Price 0.055 ETH"
        document.getElementById('nftNum').innerHTML=" UP to 5 per wallet"
        document.getElementById("minta").style.display='inline-block'
        document.getElementById("mintb").style.display='inline-block'
        document.getElementById("mintc").style.display='inline-block'
        document.getElementById("mintd").style.display='inline-block'
        document.getElementById("minte").style.display='inline-block'
    }
} 

function closeConnect(){
    var exit_account = document.getElementById("cleanwallet");
	exit_account.style.display = 'none'
	document.getElementById("MINT_it").style.display='inline-block'
	document.getElementById("mintblock").style.display='none';
	document.getElementById("MINT_it").innerText="Please connect wallet first";
	document.getElementById('ConnectWallet').innerText= "Connect Wallet";
	document.getElementById('nftPrice').innerHTML="Price 0.055 ETH"
    document.getElementById('nftNum').innerHTML="UP to 2 per wallet"
    document.getElementById('nftPrice').style.display='none';
    document.getElementById('nftNum').style.display='none';
    document.getElementById('mintg').style.display='none';
}

function show_original(){

    document.getElementById('ConnectMetaMask').innerText= 'Connect MetaMask';
    var mint_NFT = document.getElementById("mint_NFT");
	mint_NFT.style.display="none";
	var mint_NFT_white = document.getElementById("mint_NFT_white");
	mint_NFT_white.style.display="none";
    var MINT_it = document.getElementById("MINT_it");
	MINT_it.style.display="inline-block";
	var exit_account = document.getElementById("exit_account");
	exit_account.style.display="none";
}




//function switch_network(){
//
//
//window.ethereum
//    .request({
//        method: 'wallet_addEthereumChain',
//        params: [
//            {
//                chainId: '0x38',
//                chainName: 'BSC',
//                nativeCurrency: {
//                    name: 'BNB',
//                    symbol: 'BNB',
//                    decimals: 18,
//                },
//                rpcUrls: ['https://bsc-dataseed.binance.org/'],
//                blockExplorerUrls: ['https://bscscan.com/'],
//            },
//        ],
//    })
//    .then(() => {
//        console.log('success')
//    })
//    .catch((e) => {
//
//    })
//
//
//}

//function ajaxData (address, mint_num) {
//    let match = location.search
//    var matchObj = {}
//    if (match) {
//        match = match.replace('?', '')
//        let matchList = match.split("&")
//        matchList.forEach(element => {
//            const s = element.split('=')
//            if (s.length == 2) {
//                matchObj['invite_Code'] = s[1].trim();
//            }
//        });
//    }
//    const now = new Date().getTime()
//
//    var xhr = new XMLHttpRequest();
//    xhr.withCredentials = true;
//    $.ajax({
//        type:'POST',
//        // url:"https://motorn.io/promoteApi/uploadUserBehavior",
//        url:"https://m.motorn.io/api/uploadUserBehavior",
//        data: JSON.stringify({
//            timestamp: now,
//            address: address,
//            invite_code: matchObj['invite_Code'],
//            mint_num: mint_num,
//            sig: window.SparkMD5.hash(`address=${address}${matchObj['invite_Code'] ? '&invite_code=' + matchObj['invite_Code'] : ''}&timestamp=${now}`)
//        }),
//        dataType: "json",
//        success:function(res){
//
//        }
//    })
//}
