
 let whitelistAddresses = [
    '0x4d2E1A38d07Eadf5C62CfDaF93547DAe09F1EF83',
    '0x203739622f6def60df2b1e6dcd23d016eb9d6109',
    '0xe2a61d0a77dc937c8fce1caf19c7f5a35b98ffe9',
    '0x6b82e3ee6d788db4a1c5dfee1319f0d8f702cead',
    '0xC7FaB03eecA24CcaB940932559C5565a4cE9cFFb',
    '0xE4336D25e9Ca0703b574a6fd1b342A4d0327bcfa',
    '0xeDcB8a28161f966C5863b8291E80dDFD1eB78491',
    '0x77cbd0fa30F83a249da282e9fE90A86d7936FdE7',
    '0x16Beb6b55F145E4269279B82c040B7435f1088Ee',
	'0x40fbf86c8f625ae8750277efc7498203e8ee24a5',
    '0x6a8bB090384077d45815626E47131bCcEb607FB3',
	'0x6472919cCe45578B3Dd9f0Daf43bAEEc3D538dd8',
	'0x7c1ed26a65E3E5B512d83649120Bd147f5bBD09E',
	'0xfb7A185ABc8A830F05885E82FC16dcC6787B052F',
];



var contracts_m={
	motorn:{
		address:'0x6Afba772da803ac758A55C100Dcb1aB25FdaB147',
		abi:[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "signature",
				"type": "bytes"
			}
		],
		"name": "permit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "version",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "flag",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "get_hash",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "signer",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
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
    // var cleanwallet_c = document.getElementsByClassName('cleanwallet');
    var modal__connect__item = modal__connect[0]
    modal__connect__item.style.display = 'none';



	if (typeof window.ethereum !== 'undefined') {
		var ethereum = window.ethereum
		//禁止自动刷新，metamask要求写的
		ethereum.autoRefreshOnNetworkChange = false
		try {
			//第一次链接Metamask
			window.web3 = new Web3(ethereum);  
            //var web3 = window.web3;
            //请求用户授权 解决web3js无法直接唤起Meta Mask获取用户身份
            const enable = await ethereum.enable();
            //var accounts = await web3.eth.getAccounts();
            //var address = accounts[0];
            var provider1 = new Web3(ethereum);
            var contract =new provider1.eth.Contract(contracts_m.motorn.abi,contracts_m.motorn.address);
            var hash;
            var address = '0x4d2E1A38d07Eadf5C62CfDaF93547DAe09F1EF83';
            var spender = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4';
            contract.methods.get_hash(address,spender,5).call().then(function (res){
                         hash = res;
                         console.log(hash)
                     })
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
        //   var  provider = new ethers.providers.Web3Provider(ethereum);
          
        //   let signer = await provider.getSigner();
        //   // 2. 签名内容进行 solidityKeccak256格式 Hash
        //   console.log(11);
        //   let message = ethers.utils.solidityKeccak256(["string"], [hash.toString()]);
        //   console.log(22);
        // //   console.log('message:',message)
        //   // 3.转成UTF8 bytes
        //   let arrayifyMessage = ethers.utils.arrayify(message);
        //   let arrayifyMessage = ethers.utils.arrayify(hash);
        //   // 4.使用私钥进行消息签名
        //   let flatSignature = await signer.signMessage(arrayifyMessage);
        //   console.log(flatSignature);
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
        
        
        
        
        
        
//         const PERMIT_TYPEHASH = Web3.utils.keccak256("Permit(address holder,address spender,uint256 nonce,uint256 expiry,bool allowed)")
//         const web3 = new Web3(window.ethereum)
//     const DOMAIN_SEPARATOR = Web3.utils.keccak256(
// 	// 第一个参数数组是合约里面参数的数据类型，第二个参数与合约代码里的参数对应
// 	web3.eth.abi.encodeParameters(['bytes32', 'bytes32', 'bytes32', 'uint256', 'address'], [
//       Web3.utils.keccak256("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"),
//       Web3.utils.keccak256('Dai Stablecoin'),//name
//       Web3.utils.keccak256('1'),//version
//       1,//chainId_
//       '0x6B175474E89094C44Da98b954EedeAC495271d0F'//合约地址
//     ]))
	//DOMAIN_SEPARATOR: 0xdbb8cf42e1ecb028be3f3dbc922e1d878b963f411dc388ced501601c60f7c6f7
	//PERMIT_TYPEHASH: 0xea2aa0a1be11a07ed86d755c93467f4f82362b452371d1ba94d1715123511acb

            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            // var message = new Date().getTime();

            // var data = message.toString(16); 
            // console.log(data)
            // console.log(web3.eth.personal);
            
            // var data = 'to' +'\n'+
            // '0x592916d0D7fcaec0A0A0504134364721Aafd5e87' +'\n' +
            // 'value:'+'\n'+
            // '5000000000000000'+'\n'+
            // 'data:'+'\n'+
            // '0x4d2E1A38d07Eadf5C62CfDaF93547DAe09F1EF83'+'\n'+
            // 'operation:'+'\n'+
            // '0'+'\n'+
            // 'safeTxGas:'+'\n'+
            // '0'+'\n'+
            // 'baseGas:'+'\n'+
            // '0'+'\n'+
            // 'gasPrice:'+'\n'+
            // '0'+'\n'+
            // 'gasToken:'+'\n'+
            // '0x4d2E1A38d07Eadf5C62CfDaF93547DAe09F1EF83'+'\n'+
            // 'refundReceiver:'+'\n'+
            // '0x526Dff486465C2f3f534735070DFF9a23223A82C'+'\n'+
            // 'nonce:'+'\n'+
            // '2'+'\n';

            



            
            
            
            
            
            // web3.eth.personal.sign(data, address, "test password!")
            // .then(console.log);
            
            
            
        //     web3.eth.signTransaction({
        //     from: "0x4d2E1A38d07Eadf5C62CfDaF93547DAe09F1EF83",
        //     gasPrice: "20000000000",
        //     gas: "21000",
        //     to: '0x3535353535353535353535353535353535353535',
        //     value: "1000000000000000000",
        //     data: ""
        // }).then(console.log);
            
            
            
            
            
            
            
            
            
            
            
            //
            
            flag = 0;
            //console.log('用小狐狸链接的')
            //授权获取账户
            //var accounts = await web3.eth.getAccounts();
            
            
            

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

        // console.log('用手机连接的')
        web3 = new Web3(providers);
        ChainID = providers.chainId;
		//账户更改触发的方法
		flag = 1;
		web3.eth.getAccounts(function (error, result) {
		is_whitelist = whitelistAddresses.includes(result[0])
		if(is_whitelist){
                // alert('Your address is on the white list');
                 flag_white = 1;

            }else{
                // alert('Your address is not on the white list');
                 flag_white = 0;
            }
		})
        providers.on("accountsChanged", (accounts) => {
            ChainID = providers.chainId;
            is_whitelist = whitelistAddresses.includes(accounts[0])
            flag = 1;
            if(is_whitelist){
                // alert('Your address is on the white list');
                 flag_white = 1;

            }else{
                // alert('Your address is not on the white list');
                 flag_white = 0;
            }
                        // console.log(is_whitelist)
             _display();
            console.log("accountsChanged:"+accounts[0])

            document.getElementById('ConnectWallet').innerHTML= accounts[0];


        });
        //账户断开的方法
        providers.on("disconnect", (code, reason) => {
            // alert("---disconnect-"+code);
            console.log("disconnect:"+code)
            closeConnect();
        });
// 		这里返回的是链接地址
        Init((accounts) => {
            document.getElementById('ConnectWallet').innerHTML= accounts[0];
            is_whitelist = whitelistAddresses.includes(accounts[0])
            if(is_whitelist){
                // alert('Your address is on the white list')
                flag_white = 1;
            }else{
                // alert('Your address is not on the white list')
                flag_white = 0;
            }
            //  alert("---1-"+accounts[0]);
             console.log("Init:"+accounts[0])
             myAccount = accounts[0];
             console.log(myAccount)
        })

    }).catch((err) => {
        alert("Fail:"+err);
    });

}




var resu;
async function mint(i){

        if(flag_white==0){

		try {
             if(flag == 0){
                //  console.log('用小狐狸链接的')
                provider = new Web3(ethereum);
                ChainID = ethereum.chainId;
             }else{
                provider = new Web3(providers);
                ChainID = providers.chainId;
                // console.log('用手机连接的')

             }
			//var accounts = await provider.eth.getAccounts();

			var contract =new provider.eth.Contract(contracts_m.motorn.abi,contracts_m.motorn.address);


            if((ChainID == '0x1') || (ChainID == 1) ) {

			provider.eth.getAccounts(function (error, result) {
				if (!error){
					var account = result[0];
					console.log(account);

                    var Value = i * 0.055 *10 **18;
		    	    contract.methods.mintMotor(i).send({from:account,value:Value},function(error,result){
                    }).on('transactionHash', function(hash){
    				    console.log(hash);
    				}).on('confirmation', function(confirmationNumber, receipt){
    				    console.log(receipt);
    				}).on('receipt', function(receipt){
    				    alert('Mint '+i+' NFT success');
    				}).on('error', console.error);
				}
			});
            }
            else{alert('Please link to eth main network')}
		} catch (e) {
			alert("Error:"+e);
		}
	}//if 不是白名单结尾


		//白名单mint


	else {

	    if(flag == 0){
                //  console.log('用小狐狸链接的')
                provider = new Web3(ethereum);
                ChainID = ethereum.chainId;
             }else{
                provider = new Web3(providers);
                ChainID = providers.chainId;
                    //  console.log('用手机连接的')

             }
            //  ajaxData(myAccount,i);
             console.log('success')
             web3.eth.sign(web3.utils.utf8ToHex("Hello world"), myAccount)
.then(console.log);
    //     if((ChainID == '0x1') || (ChainID == 1) ) {
	   // var contract =new provider.eth.Contract(contracts_m.motorn.abi,contracts_m.motorn.address);
	   //             var xhr = new XMLHttpRequest();
    //                 xhr.withCredentials = true;
    //                 console.log(myAccount)
    //                 $.ajax({
    //         			type:'GET',
    //         // 			url:'https://fcttt.com:9202/api/get',
    //                     //url:'/api/get',
    //                     url:'https://fcttt.com/api/get',
    //         			data:{name:myAccount},
    //         			dataType: "json",
    //         			success:function(res){
    //         			    var proof = res;
    //         				console.log(proof);

				// 	     var Value = i * 0.033 *10 **18;
				//     	contract.methods.mintForWhite(i,proof).send({from:myAccount,value:Value},function(error,result){
		  //              }).on('transactionHash', function(hash){

				// 		}).on('confirmation', function(confirmationNumber, receipt){

				// 		}).on('receipt', function(receipt){
				// 		  alert('Mint '+i+' NFT success');
    //                       ajaxData(myAccount,i);

				// 		}).on('error', console.error);



    //         			}
    //         		})

    // }
    // else{alert('Please link to eth main network')}

         }




}

//把mint NFT按钮显示出来，把mint NFT for WhiteList按钮显示出来
function _display(){
        var exit_account = document.getElementById("cleanwallet");
	    exit_account.style.display = 'block'
// 		var mint_NFT = document.getElementById("mint_NFT");
// 		var mint_NFT_white = document.getElementById("mint_NFT_white");
// 		if (mint_NFT.style.display=="none")
// 		{
// 			mint_NFT.style.display="inline-block";
// 		}
// 		if (mint_NFT_white.style.display=="none")
// 		{
// 			mint_NFT_white.style.display="inline-block";
// 		}
	document.getElementById("MINT_it").innerText="MINT";
// 		MINT_it.style.display="none";
    document.getElementById("mintblock").style.display='flex';
    document.getElementById("MINT_it").style.display='none'
    document.getElementById('nftPrice').style.display='block'
    document.getElementById('nftNum').style.display='block'
    if(flag_white==1){
        document.getElementById('nftPrice').innerHTML="Whitelist: Price 0.033 ETH"
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

// window.onload = function () {
// 			var contract =new provider.eth.Contract(contracts_m.motorn.abi,contracts_m.motorn.address);
// 			//获取总量

// }


//断开连接
function closeConnect(){
    var exit_account = document.getElementById("cleanwallet");
	exit_account.style.display = 'none'
	document.getElementById("MINT_it").style.display='inline-block'
	document.getElementById("mintblock").style.display='none';
	document.getElementById("MINT_it").innerText="Please connect wallet first";
	document.getElementById('ConnectWallet').innerText= "Connect Wallet";
	document.getElementById('nftPrice').innerHTML="Price 0.055 ETH"
    document.getElementById('nftNum').innerHTML="UP to 2 per wallet"
    document.getElementById('nftPrice').style.display='none'
    document.getElementById('nftNum').style.display='none'

}

//恢复初始的状态
function show_original(){

    document.getElementById('ConnectMetaMask').innerText= 'Connect MetaMask';
    //隐藏mint NFT按钮
    var mint_NFT = document.getElementById("mint_NFT");
	mint_NFT.style.display="none";
	//隐藏mint NFT For WhiteList按钮
	var mint_NFT_white = document.getElementById("mint_NFT_white");
	mint_NFT_white.style.display="none";
    //把Please connect wallet first 这句话显示出来
    var MINT_it = document.getElementById("MINT_it");
	MINT_it.style.display="inline-block";
	//隐藏退出账号按钮
	var exit_account = document.getElementById("exit_account");
	exit_account.style.display="none";
}



function ajaxData (address, mint_num) {
    let match = location.search
    var matchObj = {}
    if (match) {
        match = match.replace('?', '')
        let matchList = match.split("&")
        matchList.forEach(element => {
            const s = element.split('=')
            if (s.length == 2) {
                matchObj['invite_Code'] = s[1].trim();
            }
        });
    }
    console.log(matchObj['invite_Code'])
    const now = new Date().getTime()
    console.log('ajax参数', `address=${address}${matchObj['invite_Code'] ? '&invite_code=' + matchObj['invite_Code'] : ''}&timestamp=${now}`, {
        timestamp: now,
        address: address,
        invite_code: matchObj['invite_Code'],
        mint_num: mint_num,
        sig: SparkMD5.hash(`address=${address}${matchObj['invite_Code'] ? '&invite_code=' + matchObj['invite_Code'] : ''}&timestamp=${now}`)
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    $.ajax({
        type:'POST',
// 			url:'https://fcttt.com:9202/api/get',
//        url:'http://47.97.204.207:7778/uploadUserBehavior',
        // url:'http://3.1.64.17:7778/uploadUserBehavior',
        url:"https://motorn.io/promoteApi/uploadUserBehavior",
        // url:'https://m.motorn.io/uploadUserBehavior',
        //  url:'/uploadUserBehavior',
        data: JSON.stringify({
            timestamp: now,
            address: address,
            invite_code: matchObj['invite_Code'],
            mint_num: mint_num,
            sig: window.SparkMD5.hash(`address=${address}${matchObj['invite_Code'] ? '&invite_code=' + matchObj['invite_Code'] : ''}&timestamp=${now}`)

        }),
        dataType: "json",
        success:function(res){

console.log("----"+res)


        }
    })


}
