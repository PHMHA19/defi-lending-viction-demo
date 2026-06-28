# DeFi Lending Protocol (Aave Fork)

> **GitHub Repository:** https://github.com/PHMHA19/defi-lending-aave

## Giới thiệu

Đây là dự án xây dựng một giao thức **DeFi Lending Protocol** lấy cảm hứng từ **Aave Protocol**, được phát triển trên mạng **Ethereum Sepolia Testnet**.

Người dùng có thể:

* Kết nối ví MetaMask
* Deposit tài sản
* Borrow tài sản
* Repay khoản vay
* Withdraw tài sản
* Theo dõi trạng thái tài sản trên blockchain

Dự án bao gồm:

* Smart Contract (Solidity + Hardhat)
* Frontend (NextJS + React)
* Kết nối blockchain thông qua MetaMask

---

# Môi trường phát triển

| Thành phần       | Phiên bản                |
| ---------------- | ------------------------ |
| Operating System | Windows 11 64-bit        |
| Node.js          | v22.22.3                 |
| npm              | 10.9.8                   |
| Yarn             | 4.13.0                   |
| Git              | 2.51.0.windows.2         |
| Hardhat          | 3.5.1                    |
| Blockchain       | Ethereum Sepolia Testnet |
| Wallet           | MetaMask                 |

---

# Yêu cầu trước khi chạy

Cài đặt các phần mềm sau:

* Git
* Node.js (khuyến nghị Node.js 22 LTS trở lên)
* Yarn
* MetaMask

---

# Kiểm tra môi trường

## Kiểm tra Node.js

```bash
node -v
```

Kết quả mong muốn:

```bash
v22.22.3
```

---

## Kiểm tra npm

```bash
npm -v
```

Kết quả:

```bash
10.9.8
```

---

## Kiểm tra Git

```bash
git --version
```

Kết quả:

```bash
git version 2.51.0.windows.2
```

---

## Kiểm tra Yarn

```bash
yarn -v
```

Kết quả:

```bash
4.13.0
```

Nếu chưa cài Yarn:

```bash
npm install -g yarn
```

---

# Clone dự án

```bash
git clone https://github.com/PHMHA19/defi-lending-demo.git
```

Di chuyển vào thư mục dự án:

```bash
cd defi-lending-aave
```

---

# Cài đặt thư viện

Tại thư mục gốc của dự án:

```bash
yarn install
```

Lệnh trên sẽ tự động cài toàn bộ dependency của project.

---

# Chạy Frontend

Di chuyển tới thư mục frontend:

```bash
cd packages/nextjs
```

> **Lưu ý:** Để chạy đầy đủ giao diện, cần file `packages/nextjs/.env.local`.  
> File này không được đưa lên GitHub vì lý do bảo mật. Vui lòng liên hệ tác giả để nhận file cấu hình trước khi chạy dự án.

Khởi động ứng dụng:

```bash
yarn start
```

Sau khi chạy thành công, mở trình duyệt tại:

```
http://localhost:3000
```

---

# Kết nối MetaMask

Sau khi giao diện được mở:

1. Cài MetaMask Extension.
2. Chuyển mạng sang **Ethereum Sepolia**.
3. Kết nối ví.
4. Đảm bảo ví có ETH Sepolia để thanh toán phí Gas.
5. Thực hiện Deposit, Borrow, Repay hoặc Withdraw.

---

# Smart Contract

Smart Contract đã được triển khai trên **Ethereum Sepolia Testnet**.

Do đó:

* Không cần deploy lại contract.
* Không cần tạo file `.env`.
* Không cần Private Key.
* Không cần Alchemy API Key.
* Không cần Etherscan API Key.

Chỉ cần chạy giao diện và kết nối MetaMask để sử dụng.

---

# Nếu muốn phát triển Smart Contract

Di chuyển tới thư mục Hardhat:

```bash
cd packages/hardhat
```

Kiểm tra phiên bản Hardhat:

```bash
yarn hardhat --version
```

Kết quả:

```bash
3.5.1
```

Compile Smart Contract:

```bash
yarn hardhat compile
```

---

# Cấu trúc thư mục

```
defi-lending-aave
│
├── packages
│   │
│   ├── hardhat
│   │   ├── contracts
│   │   ├── deploy
│   │   ├── scripts
│   │   ├── test
│   │   └── hardhat.config.ts
│   │
│   └── nextjs
│       ├── app
│       ├── components
│       ├── hooks
│       ├── public
│       └── pages
│
├── package.json
├── yarn.lock
└── README.md
```

---

# Các lệnh thường dùng

### Cài dependency

```bash
yarn install
```

### Chạy frontend

```bash
cd packages/nextjs

yarn dev
```

### Compile Smart Contract

```bash
cd packages/hardhat

yarn hardhat compile
```

### Kiểm tra phiên bản Hardhat

```bash
yarn hardhat --version
```

---

# Lỗi thường gặp

## Chưa cài Yarn

```
'yarn' is not recognized...
```

Khắc phục:

```bash
npm install -g yarn
```

---

## Thiếu dependency

```
Cannot find module...
```

Khắc phục:

```bash
yarn install
```

---

## Sai mạng

Nếu MetaMask đang ở Ethereum Mainnet hoặc mạng khác, hãy chuyển sang:

```
Ethereum Sepolia
```

---

## Không có ETH Sepolia

Người dùng cần nhận ETH testnet từ Faucet tại https://sepolia-faucet.pk910.de/ trước khi thực hiện giao dịch.

---

# Lưu ý

* Dự án chạy trên **Ethereum Sepolia Testnet**.
* Mọi giao dịch đều yêu cầu ETH Sepolia để thanh toán Gas Fee.
* Người dùng thông thường **không cần tạo file `.env`**.
* File `.env` chỉ cần khi phát triển hoặc deploy lại Smart Contract.

---

## Tự deploy Smart Contract

Để tự deploy dự án lên Sepolia hoặc mạng khác, cần tạo file:

```text
packages/hardhat/.env
```

và cấu hình các biến môi trường cần thiết:

```env
ALCHEMY_API_KEY=your_alchemy_api_key
ETHERSCAN_API_KEY=your_etherscan_api_key
__RUNTIME_DEPLOYER_PRIVATE_KEY=your_wallet_private_key
```

Sau đó có thể compile và deploy bằng Hardhat.

# Tác giả

**PHMHA19**

- **GitHub:** https://github.com/PHMHA19
- **Repository:** https://github.com/PHMHA19/defi-lending-demo

> Nếu cần file **`.env.local`** để chạy đầy đủ Frontend, vui lòng liên hệ tác giả qua GitHub.
