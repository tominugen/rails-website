require 'test_helper'

class WhatwelookforControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get whatwelookfor_index_url
    assert_response :success
  end

end
