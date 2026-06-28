# DeFi Lending Protocol (Aave Fork)

> **GitHub Repository:** https://github.com/PHMHA19/defi-lending-demo

## Mục lục

* [Giới thiệu](#giới-thiệu)
* [Tính năng](#tính-năng)
* [Kiến trúc hệ thống](#kiến-trúc-hệ-thống)
* [Công nghệ sử dụng](#công-nghệ-sử-dụng)
* [Môi trường phát triển](#môi-trường-phát-triển)
* [Yêu cầu trước khi chạy](#yêu-cầu-trước-khi-chạy)
* [Clone dự án](#clone-dự-án)
* [Cài đặt thư viện](#cài-đặt-thư-viện)
* [Chạy Frontend](#chạy-frontend)
* [Kết nối MetaMask](#kết-nối-metamask)
* [Smart Contract](#smart-contract)
* [Phát triển Smart Contract](#nếu-muốn-phát-triển-smart-contract)
* [Cấu trúc thư mục](#cấu-trúc-thư-mục)
* [Các lệnh thường dùng](#các-lệnh-thường-dùng)
* [Lỗi thường gặp](#lỗi-thường-gặp)
* [Tự deploy Smart Contract](#tự-deploy-smart-contract)
* [Tác giả](#tác-giả)
* [Giấy phép](#giấy-phép)

---

## Giới thiệu

Đây là dự án xây dựng một giao thức **DeFi Lending Protocol** lấy cảm hứng từ **Aave Protocol**, được phát triển trên mạng **Ethereum Sepolia Testnet**.

---

## Quick Start

```bash
git clone https://github.com/PHMHA19/defi-lending-demo.git

cd defi-lending-demo

yarn install

cd packages/nextjs

yarn start
```

Sau đó truy cập:

```
http://localhost:3000
```
---

# Tính năng

Dự án hiện hỗ trợ các chức năng chính sau:

* ✅ Kết nối ví MetaMask
* ✅ Hỗ trợ mạng Ethereum Sepolia Testnet
* ✅ Deposit (cung cấp tài sản)
* ✅ Borrow (vay tài sản)
* ✅ Repay (hoàn trả khoản vay)
* ✅ Withdraw (rút tài sản)
* ✅ Approve ERC20 Token
* ✅ Theo dõi tài sản đang gửi
* ✅ Theo dõi khoản vay hiện tại
* ✅ Hiển thị thông tin tài khoản từ Smart Contract
* ✅ Tương tác trực tiếp với Smart Contract thông qua MetaMask

---

# Kiến trúc hệ thống

Hệ thống được xây dựng theo mô hình sau:

```text
+-------------+
|    User     |
+-------------+
       │
       ▼
+--------------------+
|      MetaMask      |
+--------------------+
       │
       ▼
+--------------------+
| Frontend (Next.js) |
| React + Wagmi      |
+--------------------+
       │
       ▼
+--------------------+
| Ethereum Sepolia   |
+--------------------+
       │
       ▼
+--------------------+
| Smart Contracts    |
| (Aave Fork)        |
+--------------------+
```

Frontend chịu trách nhiệm hiển thị giao diện và gửi yêu cầu giao dịch.

MetaMask thực hiện ký giao dịch.

Các Smart Contract xử lý toàn bộ nghiệp vụ vay, cho vay và quản lý tài sản trên blockchain.

---

# Công nghệ sử dụng

| Thành phần           | Công nghệ                |
| -------------------- | ------------------------ |
| Frontend             | Next.js                  |
| UI                   | React                    |
| Smart Contract       | Solidity                 |
| Blockchain Framework | Hardhat                  |
| Blockchain Network   | Ethereum Sepolia Testnet |
| Wallet               | MetaMask                 |
| Web3 Library         | Wagmi                    |
| Package Manager      | Yarn                     |
| Version Control      | Git                      |

---

# Quy trình hoạt động

Quá trình sử dụng hệ thống diễn ra theo các bước sau:

1. Người dùng kết nối ví MetaMask.
2. Frontend lấy thông tin tài khoản và tài sản từ blockchain.
3. Người dùng lựa chọn Deposit, Borrow, Repay hoặc Withdraw.
4. MetaMask hiển thị cửa sổ xác nhận giao dịch.
5. Giao dịch được gửi lên Ethereum Sepolia.
6. Smart Contract xử lý giao dịch.
7. Frontend cập nhật dữ liệu mới sau khi giao dịch thành công.

---


# Môi trường phát triển

| Công cụ | Phiên bản | Kiểm tra |
|---------|-----------|----------|
| Node.js | v22.22.3 | `node -v` |
| npm | 10.9.8 | `npm -v` |
| Yarn | 4.13.0 | `yarn -v` |
| Git | 2.51.0.windows.2 | `git --version` |
| Hardhat | 3.5.1 | `yarn hardhat --version` |
| Blockchain | Ethereum Sepolia Testnet | - |
| Wallet | MetaMask | - |

> Nếu chưa cài Yarn:

```bash
npm install -g yarn
```

---

# Yêu cầu trước khi chạy

Cài đặt các phần mềm sau:

* Git
* Node.js (khuyến nghị Node.js 22 LTS trở lên)
* Yarn
* MetaMask

---

# Clone dự án

```bash
git clone https://github.com/PHMHA19/defi-lending-demo.git
```

Di chuyển vào thư mục dự án:

```bash
cd defi-lending-aave-main
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
