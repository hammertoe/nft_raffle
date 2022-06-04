from xrpl.wallet import Wallet
import xrpl
import json

secret = 'spyuhCRSBNVzKw1k3if9M5oSnsyZt' # rhstMhqBta2kLaJyqm1t6pNofDAtyuTgWu
testnet_url = "http://xls20-sandbox.rippletest.net:51234"
nft_uri = "ipfs://QmQjDvDhfHcMyUgDAxKig4AoMTtS5JrsfpiEEpFa3F9QRt"

wallet = Wallet(seed=secret, sequence=0)
client = xrpl.clients.JsonRpcClient(testnet_url)

# Prepare our transaction
my_mint = xrpl.models.transactions.NFTokenMint(
    account=wallet.classic_address,
    nftoken_taxon=0,
    flags=0,
    uri=xrpl.utils.str_to_hex(nft_uri),
)

# Sign the transaction
signed_tx = xrpl.transaction.safe_sign_and_autofill_transaction(
        my_mint, wallet, client)
max_ledger = signed_tx.last_ledger_sequence
tx_id = signed_tx.get_hash()

print(tx_id)

# Send the transaction
try:
    tx_response = xrpl.transaction.send_reliable_submission(signed_tx, client)
except xrpl.transaction.XRPLReliableSubmissionException as e:
    exit(f"Submit failed: {e}")

print(json.dumps(tx_response.result, indent=4, sort_keys=True))
print(f"Explorer link: https://xls20.bithomp.com/explorer/{tx_id}")
metadata = tx_response.result.get("meta", {})
if metadata.get("TransactionResult"):
    print("Result code:", metadata["TransactionResult"])


