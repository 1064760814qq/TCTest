
// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./MerkleProof.sol";


contract OtherDeed is ERC721Enumerable, Ownable, MerkleProof, ReentrancyGuard {
    
    using Strings for uint256;

    uint256 public immutable pricePer;
    uint256 public immutable priceWhite;
    uint256 public immutable maxNFT;
    uint256 public immutable maxWhiteListAmount;
    uint256 public mintWhiteTotal;

    string  public baseUri;

    bool    public isSaleActive = false;
    bool    public preSale = true;
    bytes32 public merkleRoot = 0x7108a67b4fc2b2cb13d6b772509644cfc3bd7d9d6d228df123fde2edb829970e;

    

    constructor()
        public
        ERC721("otherDeed", "otherDeed")
    {
        pricePer = 0.01 * 10 ** 18;
        priceWhite = 0.0001 * 10 ** 18;
        maxNFT = 10000;
        maxWhiteListAmount = 1000;
    }

    function flipSaleState() external onlyOwner {
        isSaleActive = !isSaleActive;
    }

    function preSaleState() external onlyOwner {
        preSale = !preSale;
    }

    function setMerkleRoot(bytes32 _merkleRoot) public onlyOwner {
        merkleRoot = _merkleRoot;
    }

    function _setBaseURI(string memory baseURI) internal {
        baseUri = baseURI;
    }

    function setBaseURI(string memory baseURI) external onlyOwner {
        _setBaseURI(baseURI);
    }

    function tokenURI(uint256 tokenId) public view  override returns (string memory) {
        _requireMinted(tokenId);

        string memory baseURI = baseUri;
        return string(abi.encodePacked(baseURI,"/",(tokenId.toString()),".txt"));
    }

    function tokensOfOwner(address _owner)
        external
        view
        returns (uint256[] memory)
    {
        uint256 tokenCount = balanceOf(_owner);
        uint256[] memory tokensId = new uint256[](tokenCount);

        for (uint256 i = 0; i < tokenCount; i++) {
            tokensId[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokensId;
    }

 
    function mint(uint256 numberOfTokens) public payable nonReentrant {
        require(isSaleActive, "Sale is not active");
        require(totalSupply() + numberOfTokens <= maxNFT, "Purchase would exceed max supply ");
        require(pricePer * numberOfTokens == msg.value, " value is not correct");
        
        payable(owner()).transfer(msg.value);
 
        for (uint256 i = 0; i < numberOfTokens; i++) {
            uint256 mintIndex = totalSupply();
            if (totalSupply() < maxNFT) {
                _safeMint(msg.sender, mintIndex);
            }
        }
    }


    function mintForWhiteList(uint256 numberOfTokens, bytes32[] calldata _merkleProof) public payable nonReentrant {
        require(preSale, "PreSale is not active");
        require(totalSupply() + numberOfTokens  <= maxNFT, "Purchase would exceed max supply");
        require(priceWhite * numberOfTokens == msg.value, "value is not correct");
        require(mintWhiteTotal + numberOfTokens <= maxWhiteListAmount,"Exceeds the maximum number of white list");
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        require(MerkleProof.verify(_merkleProof,merkleRoot,leaf),"Invaild proof.");
          
        payable(owner()).transfer(msg.value);
        
        for (uint256 i = 0; i < numberOfTokens; i++) {
            uint256 mintIndex = totalSupply();
            if (totalSupply() < maxNFT) {
                _safeMint(msg.sender, mintIndex);
            }
        }
        mintWhiteTotal = mintWhiteTotal + numberOfTokens;
    }




}